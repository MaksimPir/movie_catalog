const filmService=require('../service/film.service')
class FilmController{
    async getFilms(req,res,next)
    {
        try
        {
            const {start,count}=req.query
            console.log(req.query,'params');
            let films={}
            if(isNaN(Number(start))&&isNaN(Number(count)))
            {
                films=await filmService.getFilms()
            }else
            {
                films=await filmService.getRangeFilms(start,count)
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