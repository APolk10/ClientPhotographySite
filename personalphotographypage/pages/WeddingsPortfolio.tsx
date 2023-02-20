import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Wedding from '../components/Wedding';

interface Data {
  images: any[]
}

export default function WeddingsPortfolio({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <Wedding gallery={data}/>
  )
}

export const getServerSideProps: GetServerSideProps<{data: any[]}> = async () => {
  const response = await fetch('http://localhost:3000/api/images/pictureAPI');
  const data: Data = await response.json();
  const images = data.images.filter((image) => {
    return image.folder === "Tim Photography/Weddings"
  })

  return {
    props: {
      data: images,
    },
  }
}
