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

type IProps = {
  weather: string | null;
  weatherIcon: string | null;
};

export default function HomeView({ weather, weatherIcon }: IProps) {
  return (
    <Layout>
      <Navigation weather={weather} weatherIcon={weatherIcon} />
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
