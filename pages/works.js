import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbfpt from '../public/images/works/fpt.png'
const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as = "h3" fontsize = {20} mb = {4}>
                Works
            </Heading>
            <SimpleGrid columns = {[1, 1, 2]} gap = {6}>
                <Section delay = {0.2}>
                    <WorkGridItem id="FPT" title="Student" thumbnail={thumbfpt}>
                        I am a student at FPT University, major in Computer Science and Aritificial Intelligence
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works