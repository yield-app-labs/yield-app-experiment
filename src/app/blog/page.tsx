import HelloWorld from "../hello.md";

async function Blog() {
  return (
    <main className="container mx-auto px-6 lg:w-1/2 py-8">
      <HelloWorld />
      {/* <ul className="hidden list-disc list-inside">
        <li className=""></li>
      </ul> */}
    </main>
  );
}

export default Blog;
