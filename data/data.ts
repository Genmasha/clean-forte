import flo1 from '../resource/icons/flo1.png'
import flo2 from '../resource/icons/flo2.png'
import flo4 from '../resource/icons/flo4.png'
import face1 from '../resource/icons/face1.jpg'
import face2 from '../resource/icons/face2.jpg'
import face3 from '../resource/icons/face3.png'
import featureIconThour from '../resource/icons/toxic.jpg'
import featureIconTwo from '../resource/icons/alergia.png'
import featureIconThree from '../resource/icons/diarrheabig.jpg'
import insomnia from '../resource/icons/papiloma.jpg'
import krw from '../resource/icons/blood.jpg'
import alarm from '../resource/icons/alarm.png'
import heart from '../resource/icons/heart.png'
import dna from '../resource/icons/dna.png'
import molec from '../resource/icons/molec.png'
import pill1 from '../resource/icons/pill1.png'
import pill3 from '../resource/icons/pill3.png'
import product from '../resource/icons/product.png'
import backgroundHero from '../resource/bg/bg.png'
import { getLanguage } from '../utils/utils'

import bottl from '../resource/icons/botl.svg'

import drops from '../resource/icons/drops.svg'
import ing1 from '../resource/icons/gvozdika.jpg'
import ing2 from '../resource/icons/oreh.jpg'
import ing3 from '../resource/icons/patifloria.jpg'
import ing4 from '../resource/icons/genciana.jpg'

export const useData = (locale: string | undefined) => {
  const t = getLanguage(locale)
  const data = {
    head: {
      title: t.head.title,
      meta1: {
        name: t.head.meta1.name,
        content: t.head.meta1.content,
        title: t.head.meta1.title
      },
      meta2: {
        name: t.head.meta2.name,
        content: t.head.meta2.content,
        title: t.head.meta2.title
      },
      meta3: {
        name: t.head.meta3.name,
        content: t.head.meta3.content,
        title: t.head.meta3.title
      },
      meta4: {
        name: t.head.meta4.name,
        content: t.head.meta4.content,
        title: t.head.meta4.title
      },
      meta5: {
        name: t.head.meta5.name,
        content: t.head.meta5.content,
        title: t.head.meta5.title
      }
    },
    labelsTimer: {
      days: t.days,
      hours: t.hours,
      minutes: t.minutes,
      seconds: t.seconds
    },
    reviews: [
      {
        id: 1,
        rating: 5,
        content: `
      <p>${t.reviews.p1}</p>
    `,
        date: t.reviews.date1,
        datetime: '2023-02-20',
        author: t.reviews.author1,
        img: face3
      },
      {
        id: 2,
        rating: 5,
        content: `<p>${t.reviews.p2}</p>`,
        date: t.reviews.date2,
        datetime: '2023-02-12',
        author: t.reviews.author2,
        img: face1
      },
      {
        id: 3,
        rating: 5,
        content: `<p>${t.reviews.p3}</p>`,
        date: t.reviews.date3,
        datetime: '2022-12-12',
        author: t.reviews.author3,
        img: face2
      }
    ],
    titleReviews: t.titleReviews,
    descriptionHero: t.descriptionHero,
    titleHero: t.titleHero,
    backgroundHero: backgroundHero,
    buttonHero: t.buttonHero,
    titleFeature: 'Clean Forte que para sirve',
    featureProduct: [
      {
        name: t.featureProduct.name1,
        description: t.featureProduct.description1,
        imageSrc: insomnia,
        imageAlt: t.featureProduct.imageAlt1,
        bgColor: 'black',
        textColor: 'white'
      },
      {
        name: t.featureProduct.name2,
        description: t.featureProduct.description2,
        imageSrc: featureIconTwo,
        imageAlt: t.featureProduct.imageAlt2,
        bgColor: 'white',
        textColor: 'black'
      },
      {
        name: t.featureProduct.name3,
        description: t.featureProduct.description3,
        imageSrc: featureIconThree,
        imageAlt: t.featureProduct.imageAlt3,
        bgColor: 'white',
        textColor: 'black'
      },
      // {
      //   name: t.featureProduct.name4,
      //   description: t.featureProduct.description4,
      //   imageSrc: featureIconThour,
      //   imageAlt: t.featureProduct.imageAlt4,
      //   bgColor: 'white',
      //   textColor: 'black'
      // },
      // {
      //   name: t.featureProduct.name5,
      //   description: t.featureProduct.description5,
      //   imageSrc: krw,
      //   imageAlt: t.featureProduct.imageAlt5,
      //   bgColor: 'white',
      //   textColor: 'black'
      // }
    ],

    titleFeatureSeven: t.titleFeatureSeven,
    buttonFeatureSeven: t.buttonFeatureSeven,
    textFooter: t.textFooter,
    disclaimerFooter: t.disclaimerFooter,
    rightsFooter: t.rightsFooter,
    incentives: [
      {
        name: t.incentives.name1,
        description: t.incentives.description1,
        img: bottl
      },
      {
        name: t.incentives.name2,
        description: t.incentives.description2,
        img: bottl
      },
      {
        name: t.incentives.name3,
        description: t.incentives.description3,
        img: flo4
      }
    ],
    
    titleIncentives: t.incentivesTitle,
    cards: [
      {
        heading: 'Clavos de olor' ,
        text: 'Destruyen todos los tipos de parásitos conocidos.',
        img: ing1
      },
      {
        heading: 'Hoja de nuez',
        text: 'Limpia los órganos y los tejidos, neutraliza la toxicación causada por la infección parasitaria.',
        img: ing2
      },
      {
        heading: 'Raíz de pasiflora',
        text: 'Aumenta la inmunidad y la resistencia del cuerpo.',
        img: ing3
      },
      {
        heading: 'Raíz de Gentiana Lutera',
        text: 'Deberia reparar las funciones de los órganos deprimidos.',
        img: ing4
      }
    ],
    flow: [
      {
        title: t.flow.title1,
        img: pill1
      },
      {
        title: t.flow.title2,
        img: pill3
      }
    ],
    contactOne: {
      title: t.contactOne.title,
      price: t.contactOne.price,
      imageAlt: t.contactOne.imageAlt,
      labelName: t.contactOne.labelName,
      labelPhone: t.contactOne.labelPhone,
      placeholderName: t.contactOne.placeholderName,
      priceDiscount: t.contactOne.priceDiscount,
      placeholderPhone: t.contactOne.placeholderPhone,
      btnTitle: t.contactOne.btnTitle,
      imageSrc: product
    },
    modal: {
      modalTitleError: t.modal.modalTitleError,
      modalTitleSuccess: t.modal.modalTitleSuccess,
      modalSuccess: t.modal.modalSuccess,
      modalError: t.modal.modalError,
      button: t.modal.button
    },
    flowTitle: t.flowTitle,
    descriptionTestimonials: 'Clean Forte – Ingredientes',
    cookieButton: t.cookieButton,
    cookieDescription: t.cookieDescription,
    cookieButtonReject: t.cookieButtonReject,
    productCode: t.productCode,
    country: t.country
  }
  return data
}
