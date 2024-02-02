import { Container, Image } from "react-bootstrap"
import imagenFamilia from "../assets/personajesSimpsons.png"

const Frase = () => {
  return (
    <>  
        <Container className="border border-danger p-3 my-3">
            <h2 className="text-center border-bottom border-black pb-2">Familia Simpsons</h2>

            <Image src={imagenFamilia} className="img-fluid text-center w-50 " />

            <p className="bg-white p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis voluptates, alias neque nesciunt, impedit eius perspiciatis voluptatibus unde, porro esse eum nisi quos aut praesentium odit? Voluptates, tempora fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error, impedit dolore quisquam quod, inventore quam quo molestiae culpa aliquam sint, voluptatem tenetur consequatur ullam dicta deleniti praesentium eos libero.
            </p>
        </Container>
    </>
  )
}

export default Frase