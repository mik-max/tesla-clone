import Styles from './ButtonGroup.module.css';
function ButtonGroup(props){
     return (
         <section className ={Styles.buttonGroup}>
               <div className = "container">
                    <div className = "row">
                         <div className = "col-md-2"></div>
                         <div className = "col-md-8 text-center">
                              <button className = "btn  btn-secondary m-2 px-5">{props.leftButton}</button>
                              {props.rightButton && <button className = "btn  btn-light m-2 px-5 ">{props.rightButton}</button>}
                         </div>
                         <div className = "col-md-2"></div>
                         
                    </div>
                    <div className = {Styles.downAngleCont}>
                         <span ><i className="fa fa-angle-down angleDown" ></i></span>
                    </div>
               </div>
         </section>
     );
}
export default ButtonGroup;