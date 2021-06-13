import React, { Component } from 'react'
import { getMovies } from './getMovies'
import axios from 'axios'
export default class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:[],
            currSearchText:'',
            currPage:1,
            limit:4
        }
    }
    onDelete = (id)=>{
        let filterMovies = this.state.movies.filter(movieObj=>{
            return movieObj._id!=id
        })
        this.setState({
            movies:filterMovies
        })
    }

    async componentDidMount(){
        let promise = axios.get("https://backend-react-movie.herokuapp.com/movies");
        let data = await promise;
        this.setState({
            movies:data.data.movies
        })

    }
     
    handleChange=(e)=>{
       let task = e.target.value;
       this.setState({currSearchText:task});
    }
    handlePageChange=(pageNumber)=>{
        this.setState({currPage:pageNumber});
    }
    handleLimit=(e)=>{
        let num=Number(e.target.value);
        this.setState({limit:num})
    }

    sortUp=(param)=>{   
        let toBeSorted = [...this.state.movies];
        if(param=="numberInStock"){
            toBeSorted.sort((movieA,movieB)=>movieA.numberInStock-movieB.numberInStock);
        }else if(param=="dailyRentalRate"){
            toBeSorted.sort((movieA,movieB)=>movieA.dailyRentalRate-movieB.dailyRentalRate);
        }
        this.setState({movies:toBeSorted});
    }
    sortDown=(param)=>{
        let toBeSorted = [...this.state.movies];
        if(param=="numberInStock"){
            toBeSorted.sort((movieA,movieB)=>movieB.numberInStock-movieA.numberInStock);
        }else if(param=="dailyRentalRate"){
            toBeSorted.sort((movieA,movieB)=>movieB.dailyRentalRate-movieA.dailyRentalRate);
        }
        this.setState({movies:toBeSorted});
    }

    render() {
        let {movies,currSearchText,currPage,limit} = this.state;
        let filterMovies =[];
        
        if(currSearchText!='')
        {
            filterMovies =movies.filter(movieObj=>{
                       let title = movieObj.title.trim().toLowerCase();
                     
                       return title.includes(currSearchText.toLowerCase())
                   })
        }
        else{
            filterMovies=movies;
        }
        let nummberOfPages=Math.ceil(filterMovies.length/limit);
        let pageNumberArr=[];
        for(let i=0; i<nummberOfPages;i++){
            pageNumberArr.push(i+1);
        }
        let startingIndex=(currPage-1) * limit;
        let endingIndex=startingIndex +limit;
        filterMovies=filterMovies.slice(startingIndex,endingIndex);
        
        
        return (
            <div className='row'>
              <div className='col-3'>
                  <h1>Hello</h1>
              </div>
              <div className='col-9'>
              <input value={this.state.currSearchText} onChange={this.handleChange} type='text'></input>
              <input value={this.state.limit>filterMovies.length?filterMovies.length:this.state.limit} onChange={this.handleLimit} min='1' max={movies.length} type='number'></input>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">
      <i className="fas fa-sort-up" onClick={()=>this.sortUp("numberInStock")}></i> Stock <i className="fas fa-sort-down" onClick={()=>this.sortDown("numberInStock")}></i></th>
      <th scope="col">
      <i className="fas fa-sort-up" onClick={()=>this.sortUp("dailyRentalRate")}></i> Rate <i className="fas fa-sort-down" onClick={()=>this.sortDown("dailyRentalRate")}></i></th>
    </tr>
  </thead>
  <tbody>
   {
       filterMovies.map(movieObj=>(
                <tr scope='row' key={movieObj._id} >
                    <td></td>
                    <td>{movieObj.title}</td>
                    <td>{movieObj.genre.name}</td>
                    <td>{movieObj.numberInStock}</td>
                    <td>{movieObj.dailyRentalRate}</td>
                    <td><button type='button' className='btn btn-danger' onClick={()=>this.onDelete(movieObj._id)}>Delete</button></td>
                </tr>
            ))  
          }
  </tbody>
</table> 
<nav aria-label="...">
  <ul className="pagination pagination-sm">
    {/* <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li> */}
    {
        pageNumberArr.map(pageNum=>{
            let classStyleName=pageNum==currPage?"page-item active":"page-item";
            return(
                <li onClick={()=>this.handlePageChange(pageNum)}className={classStyleName} key={pageNum}>
                    <span className="page-link">{pageNum}</span>
                </li>
            )
        })
    }
  </ul>
</nav>
                  
              </div>  
            </div>
              
        )
    }
}
