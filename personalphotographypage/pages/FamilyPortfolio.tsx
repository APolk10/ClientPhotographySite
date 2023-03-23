import type { InferGetServerSidePropsType, GetServerSideProps, NextPage } from 'next';
import Family from '../components/Family';

interface Data {
  images: any []
}

export default function FamilyPortfolio({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Family gallery={data}/>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/images/pictureAPI', { method: "GET"})
  /* this fetch never completes */
  console.log('fetched');
  const data: Data = await response.json();
  const images = data.images.filter((image) => {
    return image.folder === "Tim Photography/Family"
  })

  return {
    props: {
      data: images,
    },
  }
}
