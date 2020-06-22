import { GraphQLClient } from "graphql-request";
import Form from "../components/Form";

const graphcms = new GraphQLClient("https://api-ap-northeast-1.graphcms.com/v2/ckbnil26x0fj201xu3ruggr6r/master");

// export default function Index(props) {
//   return (
//     <pre>{JSON.stringify(props, null, 2)}</pre>
//   )
// }
// export default function Index(props) {
//   return <Form {...props.pages[0].form} />;
// }
export default function Index({ pages }) {
  const { form } = pages[0];

  return <Form {...form} />;
}
export async function getStaticPaths() {
  const { pages } = await graphcms.request(`{
        pages {
            slug
        }
    }`)
  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  }
}


export async function getStaticProps({ params: variables }) {
  const { pages } = await graphcms.request(`query page($slug: String!) {
    pages(where: {slug: $slug}) {
      title
      slug
      form {
        fields {
          __typename
          ... on FormInput {
            name
            type
            inputLabel: label
            placeholder
            required
          }
          ... on FormTextarea {
            name
            textareaLabel: label
            placeholder
            required
          }
          ... on FormCheckbox {
            checkboxname:name
            checkboxLabel: label
            required
          }
          ... on FormSelect {
            name
            selectLabel: label
            choices {
              value
              option
            }
            required
          }
        }
      }
    }
  }`,variables)
  return {
    props: {
      pages,
    },
  };
}
