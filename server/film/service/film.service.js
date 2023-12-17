const db=require('../../db')
const ApiError=require('../../exceptions/api-error')
class FilmService{
    async getFilmById(filmId)
    {
        const candidate=await db.query(`SELECT * FROM film WHERE id='${filmId}'`)
        if(candidate.rowCount==0) return false
        return candidate.rows[0]
    }
    async getFilms()
    {
        const candidate=await db.query(`SELECT * FROM film`)
        if(candidate.rowCount==0) return false
        return candidate.rows
    }
    async getRangeFilms(start,count, direction)
    {
        let sql;
        let rowCount;
        if(Number(direction)===0)
        {
            sql=`SELECT * FROM film where id>=${start}`
        }
        else
        {
            sql=`SELECT * FROM film where id<=${start} order by id desc`
        }
        console.log(sql);
        let candidate=await db.query(sql)
        rowCount=candidate.rowCount
        if (rowCount>=count &&Number(direction))
        {
            return {films:candidate.rows.slice(0,count).reverse(), count:rowCount}
        }
        if(rowCount==0||rowCount<count)
        {
            console.log('candidate.rowCount',rowCount);
            if(rowCount==0)
            {
                return false
            }
            else
            {
                if(Number(direction)===0)
                {
                    sql=`SELECT * FROM film  order by id desc limit ${count} `
                    candidate=await db.query(sql)
                    return {films:candidate.rows.reverse(), count:rowCount}
                }
                else
                {
                    sql=`SELECT * FROM film order by id limit ${count}`
                }
                console.log(sql);
                candidate=await db.query(sql)
                return {films:candidate.rows, count:rowCount}
            }
        }
        return {films:candidate.rows.slice(0,count), count:rowCount} 
    }
}

module.exports=new FilmService()