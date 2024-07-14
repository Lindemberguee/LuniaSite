"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { TrendingUp } from "lucide-react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface GoldLogEntry {
  LogTime: string;
  TotalGold: string;
}

// Função para buscar os dados do GoldLog
const fetchGoldLogData = async (): Promise<GoldLogEntry[]> => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'seu_api_key'; // Obtenha a chave da API do .env ou use um valor padrão

  try {
    const response = await axios.get('http://localhost:3000/api/public/getgoldvalue', {
      headers: {
        'x-api-key': apiKey
      }
    });
    const goldLogData = response.data;

    return goldLogData;
  } catch (error) {
    console.error("Erro ao buscar dados do GoldLog:", error);
    return [];
  }
};

// Componente personalizado do Tooltip
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Total Gold: ${payload[0].value}G`}</p>
      </div>
    );
  }

  return null;
};

export function Dashboard() {
  const [chartData, setChartData] = useState<GoldLogEntry[]>([]);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    const getData = async () => {
      const goldLogData = await fetchGoldLogData();
      if (goldLogData.length > 0) {
        const formattedData = goldLogData.map((entry) => ({
          LogTime: new Date(entry.LogTime).toLocaleTimeString(),
          TotalGold: parseInt(entry.TotalGold, 10).toString(),
        }));
        setChartData(formattedData);
        setLastUpdate(new Date().toLocaleTimeString());
      }
    };

    // Fetch initial data
    getData();

    // Set interval to fetch data every hour (3600000 milliseconds)
    const interval = setInterval(getData, 3600000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-main-color flex items-center justify-center pt-4">
      <Card className="w-[95%]">
        <CardHeader>
          <CardTitle>Gráfico de Progressão do Gold</CardTitle>
          <CardDescription>O Gráfico abaixo exibe a quantidade do Gold proveniente de todos os jogadores</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="LogTime" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="TotalGold" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Última atualização: {lastUpdate} <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Últimos 10 registros
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
