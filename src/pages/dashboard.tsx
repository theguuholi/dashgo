import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: { show: false },
    zoom: { enable: false },
    foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
    type: "datetime",
    axisBorder: { color: theme.colors.gray[600] },
    axisTicks: { color: theme.colors.gray[600] },
    categories: [
      "2021-03-18T00:00:00.0000Z",
      "2021-03-19T00:00:00.0000Z",
      "2021-03-20T00:00:00.0000Z",
      "2021-03-21T00:00:00.0000Z",
      "2021-03-22T00:00:00.0000Z",
      "2021-03-23T00:00:00.0000Z",
      "2021-03-24T00:00:00.0000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: { shade: "dark", opacityFrom: 0.7, opacity: 0.3 },
  },
};
const series = [
  {
    name: "series 1",
    data: [31, 60, 400, 28, 109, 200, 50],
  },
];

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="110%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>

          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Inscritos
            </Text>
            <Chart type="area" options={options} series={series} height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
