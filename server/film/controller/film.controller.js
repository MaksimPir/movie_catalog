const filmService=require('../service/film.service')
class FilmController{
    async getFilms(req,res,next)
    {
        try
        {
            const films=await filmService.getFilms()
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
            return res.json(film)
        }
        catch(e)
        {
            next(e)
        }
    }
}

module.exports=new FilmController()