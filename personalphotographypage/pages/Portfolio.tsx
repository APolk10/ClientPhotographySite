import type { NextPage } from 'next'
import ImageGrid from '../components/ImageGrid'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const Portfolio: NextPage = () => {
  return (
    <ImageGrid />
  )
}

export default Portfolio;