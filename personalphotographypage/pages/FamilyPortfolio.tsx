import type { InferGetServerSidePropsType, GetServerSideProps, NextPage } from 'next';
import Family from '../components/Family';

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

interface Data {
  images: Image []
}

const port = process.env.PORT;

export default function FamilyPortfolio({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Family gallery={data}/>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(`http://0.0.0.0:${port}/api/images/getFamilyPhotos`, { method: "GET"});
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
