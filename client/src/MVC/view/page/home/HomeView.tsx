import { data } from "../../../../data";
import {
  BarContainer,
  ChartLine,
  ChartPie,
  ContentContainer,
  ContentLeft,
  ContentTopRight,
  EcoBar,
  Navigation,
  NormalButton,
  SearchBar,
  ServiceBar,
} from "../../components";
import { Layout } from "../../layout";

export default function HomeView() {
  return (
    <Layout>
      <Navigation />
      <BarContainer>
        <EcoBar />
        <SearchBar />
        <ServiceBar />
        <div className="flex justify-evenly">
          <NormalButton>tracking</NormalButton>
          <NormalButton>smart alarm</NormalButton>
          <NormalButton>sleep diary</NormalButton>
        </div>
      </BarContainer>

      <ContentContainer>
        <ContentLeft>
          <ChartLine color="black" data={data} />
        </ContentLeft>
        <ContentTopRight>
          <ChartPie data={data} />
        </ContentTopRight>
      </ContentContainer>
    </Layout>
  );
}
