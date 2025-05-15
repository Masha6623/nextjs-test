import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

interface ContactResponseBody {
  message: string;
  error?: string;
}

export async function POST(
  request: Request
): Promise<NextResponse<ContactResponseBody>> {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required", error: "Validation Error" },
        { status: 400 }
      );
    }

    console.log("Form submission:", { name, email, message });

    return NextResponse.json(
      { message: `Thank you for your interest, ${name}` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "Internal server error",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
