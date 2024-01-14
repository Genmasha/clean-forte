import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ContactOne from '../components/Contacts/ContactOne'
import Modal from '../components/Modals/ModalOne'
import ServiceTwo from '../components/Services/ServiceTwo'
import HeroTwo from '../components/Heros/HeroTwo'
import FeatureThree from '../components/Features/FeatureThree'
import Smartlook from 'smartlook-client'
import FooterOne from '../components/Footers/FooterOne'
import Testimonials from '../components/Features/FeatureFive'
import ServiceOne from '../components/Services/ServiceOne'
import { useRouter } from 'next/router'
import { useData } from '../data/data'
import ReviewsOne from '../components/Reviews/ReviewsOne'
import CookieOne from '../components/Banners/CookieOne'
import logo from '../resource/icons/cleanlogo.svg'
import product from '../resource/icons/product.jpg'
import leaflogo from '../resource/icons/leaflogo.svg'
import Image from 'next/image'
import bottl from '../resource/icons/botl.svg'
import drops from '../resource/icons/drops.svg'
import operator from '../resource/icons/operator.svg'

import num from '../resource/icons/phonenum.svg'
import ServiceTwoTwoRow from '../components/Services/ServiceTwoTwoRow'

const incentiveshow = [
  {
    name: 'Agita antes de tomar',
    description: '',
    img: bottl
  },
  {
    name: 'Diluir 10 gotas en agua',
    description: '',
    img: drops
  },
  {
    name: 'Diluir 10 gotas en agua',
    description: '',
    img: bottl
  }
]

const incentivessen = [
  {
    name: 'Deje su número de teléfono',
    description: "",
    img: num
  },
  {
    name: 'Un operador se pondrá en contacto con usted para confirmar su pedido',
    description: '',
    img: operator
  }
  // {
  //   name: t.incentives.name3,
  //   description: t.incentives.description3,
  //   img: flo4
  // }
]

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cookieModal, setCookieModal] = useState(true)
  const { locale } = useRouter()
  console.log(locale)
  const data = useData(locale)


  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

  // useEffect(() => {
  //   Smartlook.init('e0cd33e3b82bae795b7c853978b6020466dd92a4')
  // }, [])
  return (
    <>
      <Head>
        <title>{data.head.title}</title>
        <meta name={data.head.meta1.name} content={data.head.meta1.content} title={data.head.meta1.title} />
        <meta name={data.head.meta2.name} content={data.head.meta2.content} title={data.head.meta2.title} />
        <meta name={data.head.meta3.name} content={data.head.meta3.content} title={data.head.meta3.title} />
        <meta name={data.head.meta4.name} content={data.head.meta4.content} title={data.head.meta4.title} />
        <meta name={data.head.meta5.name} content={data.head.meta5.content} title={data.head.meta5.title} />
      </Head>
      <>
        {/* <HeroTwo
          title={data.titleHero}
          description={data.descriptionHero}
          button={data.buttonHero}
          imageSrc={data.backgroundHero}
        /> */}
       <nav className="flex justify-center py-2 shadow-lg" aria-label="Global">
        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src={logo} 
            alt="Logo"
            className="h-12 w-auto lg:mb-0 sm:mb-2"
          />
          <div className="flex flex-row items-center">
            {/* <Image
              src={leaflogo} 
              alt="leaf logo"
              className="lg:ml-2 mb-2 lg:mb-0 h-12 w-auto"
            /> */}
            <span className="ml-3 text-black mb-3 font-medium text-lg">Composición 100% natural</span>
          </div>
        </div>
      </nav>


        <ContactOne
          labelsTimer={data.labelsTimer}
          title={data.contactOne.title}
          price={data.contactOne.price}
          imageSrc={product}
          imageAlt={data.contactOne.imageAlt}
          labelName={data.contactOne.labelName}
          labelPhone={data.contactOne.labelPhone}
          placeholderName={data.contactOne.placeholderName}
          placeholderPhone={data.contactOne.placeholderPhone}
          priceDiscount={data.contactOne.priceDiscount}
          btnTitle={data.contactOne.btnTitle}
          productCode={data.productCode}
          country={data.country}
          setOpen={setOpenModal}
          setError={setError}
          setIsLoading={setIsLoading}
          href="contact"
        />
        <Modal
          modalTitleError={data.modal.modalTitleError}
          modalTitleSuccess={data.modal.modalTitleSuccess}
          button={data.modal.button}
          modalSuccess={data.modal.modalSuccess}
          modalError={data.modal.modalError}
          setOpen={setOpenModal}
          error={error}
          open={openModal}
          isLoading={isLoading}
        />
        <Testimonials cards={data.cards} title={data.descriptionTestimonials} />
        <FeatureThree title={data.titleFeature} features={data.featureProduct} description='Ayuda a prevenir las siguientes complicaciones de salud:'/>
        <ServiceTwo  />
        {/* <ServiceOne flow={data.flow} title={data.flowTitle} /> */}
        <ContactOne
          labelsTimer={data.labelsTimer}
          title={data.contactOne.title}
          price={data.contactOne.price}
          imageSrc={product}
          imageAlt={data.contactOne.imageAlt}
          labelName={data.contactOne.labelName}
          labelPhone={data.contactOne.labelPhone}
          placeholderName={data.contactOne.placeholderName}
          country={data.country}
          placeholderPhone={data.contactOne.placeholderPhone}
          priceDiscount={data.contactOne.priceDiscount}
          btnTitle={data.contactOne.btnTitle}
          productCode={data.productCode}
          setOpen={setOpenModal}
          setError={setError}
          setIsLoading={setIsLoading}
          href="contact"
        />
        {/* <ReviewsOne title={data.titleReviews} reviews={data.reviews} /> */}
        <ServiceTwoTwoRow incentives={incentivessen} title={data.titleIncentives} />
        <FooterOne text={data.textFooter} rights={data.rightsFooter} disclaimer={data.disclaimerFooter} />

        {/* <CookieOne
          cookieModal={cookieModal}
          setCookieModal={setCookieModal}
          description={data.cookieDescription}
          buttonTitle={data.cookieButton}
          buttoneRejectTitle={data.cookieButtonReject}
        /> */}
      </>
    </>
  )
}

export default Home
