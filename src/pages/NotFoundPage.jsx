import error404 from "../assets/error_404.png";

const NotFoundPage = () => {
  return (
    <div className="notfoundpage">
      <h1>Page not found</h1>
      <img src={error404} alt="Oops Logo" />
      
    </div>
  )
}

export default NotFoundPage;
