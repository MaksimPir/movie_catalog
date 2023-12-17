const filmService=require('../service/film.service')
class FilmController{
    async getFilms(req,res,next)
    {
        try
        {
            const {main,count, direction}=req.query
            console.log(req.query,'params');
            let films={}
            if(isNaN(Number(main))&&isNaN(Number(count))&&isNaN(Number(direction)))
            {
                films=await filmService.getFilms()
            }else
            {
                films=await filmService.getRangeFilms(main,count,direction)
            }
            return res.json(films)
        }
        catch(e)
        {
            next(e)
        }
    }
    async getFilmById(req,res,next)
    {
        try
        {
            const {idFilm}=req.params
            const film=await filmService.getFilmById(idFilm)
            return res.json({film:film})
        }
        catch(e)
        {
            next(e)
        }
    }
}

module.exports=new FilmController()