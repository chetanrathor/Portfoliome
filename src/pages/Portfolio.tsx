import { Grid } from '@mui/material'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ProjectCard } from '../components/ProjectCard'
import Container from '../components/Container'
import Wrapper from '../components/Wrapper'
import { Portfolios } from '../static'
import PageHeading from '../components/PageHeading'

const Portfolio = () => {
  return (
    <div>
      <Header></Header>
      <PageHeading heading='Portfolio'></PageHeading>

      <Container shouldVisibleBackgroundImage={false} paddingY={10}  >
        <Wrapper >
          <Grid container gap={3} >
            {
              Portfolios.map(({ description, image, link, name }) => (
                <Grid item>
                  <ProjectCard description={description} image={image} link={link} name={name}></ProjectCard>
                </Grid>
              ))
            }
          </Grid>
        </Wrapper>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Portfolio
