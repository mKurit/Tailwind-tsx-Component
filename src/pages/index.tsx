import Head from "next/head";
import { Button, Navbar, Text } from "@/components";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tailwind-tsx-Components</title>
      </Head>
      <Navbar toggle toggleOn={() => {console.log("Hello!")}}>
        <Text size="xl" weight="bold" className="text-white">Hello World</Text>
        <Button>Test</Button>
      </Navbar>
    </>
  );
}
