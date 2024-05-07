import React from 'react'
import { useEffect,useState } from 'react'
import axiosInstance from './../../axiosConfig/instance'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
function Movies() {
    const [movies,setMovies]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate=useNavigate()

    // useEffect(()=>{
    
    //  axiosInstance.get('/movie/popular').then((res)=>{
    //   console.log(res.data.results)
    //   setMovies(res.data.results);
    //  }).catch((err)=>{console.log(err)});
    // },[])

    useEffect(() => {
      fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
      axiosInstance.get(`/movie/popular?page=${page}`)
          .then((res) => {
              setMovies(res.data.results);
              setTotalPages(res.data.total_pages);
          })
          .catch((err) => {
              console.log(err);
          });
  };

  const handlePrevPage = () => {
      if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
  };

  const handleNextPage = () => {
      if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
      }
  };
    return (
        <>
        <div className="container">
        <Row xs={1} md={4} className="g-4">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Col key={movie.id} className='mt-4'>
                            <Card>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                <Card.Body>
                                    
                                <Card.Title style={{fontSize: "1.6rem"}}>{movie.title}</Card.Title>
                                    <Card.Text>{movie.overview}</Card.Text>
                                    <button className='btn btn-primary' onClick={()=>{
                                        navigate(`/Details/${movie.id}`)
                                    }}>Details</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <div>No movies found</div>
                )}
            </Row>
          {/* for pagination */}
          <div className="pagination d-flex justify-content-center m-4">
                <button className="btn btn-info px-3 mx-3" onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                <span style={{ fontSize: "1.3rem", fontWeight: "500" }}>Page {currentPage} of {totalPages}</span>
                <button className="btn btn-success px-3 mx-3" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>


        </div>

        </>
    )
}

export default Movies
