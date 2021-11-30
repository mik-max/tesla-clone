import  Container from './Container'
import Section from './Section';
function Home (props){
     return (
          <div >
               <Container>
                    <Section title = "Model-s" subtitle = "Order Online for Touchless Delivery"  leftButton = "custom order" rightButton = "existing inventory" background = "model-s.jpg" />
                    <Section title = "Model-y" subtitle = "Order Online for Touchless Delivery"  leftButton = "custom order" rightButton = "existing inventory" background = "model-y.jpg" />
                    <Section title = "Model-y" subtitle = "Order Online for Touchless Delivery"  leftButton = "custom order" rightButton = "existing inventory" background = "model-3.jpg" />
                    <Section title = "Model-y" subtitle = "Order Online for Touchless Delivery"  leftButton = "custom order" rightButton = "existing inventory" background = "model-x.jpg" />
                    <Section title = "Lowest Cost Solar Panels in America" subtitle = "Money-back gurrantee"  leftButton = "custom order" rightButton = "Learn More" background = "solar-panel.jpg" />
                    <Section title = "Solar for New Roofs" subtitle = "Solar Roofs Costs Less Than a New Roof Plus Panels"  leftButton = "custom order" rightButton = "Learn More" background = "solar-roof.jpg" />
                    <Section title = "Accessories"  leftButton = "purchase now"  background = "accessories.jpg" />
               </Container>
               
          </div>
     );
}
export default  Home;