import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import axios from 'axios';

interface RegisterRequestBody {
  accountName: string;
  password: string;
}

// Função para verificar a API Key
function verifyApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get('x-api-key');
  return apiKey === process.env.NEXT_PUBLIC_API_KEY;
}

export async function POST(request: NextRequest) {
  // Verificar a API Key
  if (!verifyApiKey(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { accountName, password }: RegisterRequestBody = await request.json();
    const response = await axios.post('http://localhost:7705/api/register', { accountName, password });

    if (response.status === 201) {
      return NextResponse.json(response.data, { status: 201 });
    } else {
      return NextResponse.json({ error: 'Erro no registro. Tente novamente mais tarde.' }, { status: response.status });
    }
  } catch (error) {
    console.error('Erro na API register:', error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
