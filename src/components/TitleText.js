function TitleText (props){
     return (
          <div className = "text-center container py-5">
               <h1>{props.title}</h1>
               <p>{props.subtitle}</p>
          </div>
     );
}
export default TitleText;