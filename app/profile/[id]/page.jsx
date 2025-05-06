import UserProfile from "./UserProfile";

export async function generateMetadata({ params }) {
  const userName = params?.name || "User";

  return {
    title: `Blogpedia | ${userName}'s Profile`,
    description: `Explore ${userName}'s blog posts and ideas.`,
  };
}

const Page = ({ params }) => {
  return <UserProfile params={params} />;
};

export default Page;
