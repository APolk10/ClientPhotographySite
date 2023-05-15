import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Wedding from '../components/Wedding';

interface Image {
  url: string
  public_id: string
  version: number
  format: string
  width: number
  height: number
  type: string
  created_at: string
}

export default function WeddingsPortfolio({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <Wedding gallery={data}/>
  )
}

export const getServerSideProps: GetServerSideProps<{data: any[]}> = async () => {
  const response = await fetch('http://localhost:3000/api/images/getWeddingPhotos', { method: 'GET' });
  const images: Image[] = await response.json();
  images.forEach((image: Image) =>
    {
      image.public_id = image.public_id.replace(/\s/, '%20');
      image.url = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/c_scale,w_0.15/v${image.version}/${image.public_id}.jpg`
    })

  return {
    props: {
      data: JSON.parse(JSON.stringify(images)),
    },
  }
}
