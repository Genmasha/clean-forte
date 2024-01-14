import { StarIcon } from '@heroicons/react/20/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

type Review = {
  id: number
  rating: number
  content: string
  date: string
  datetime: string
  author: string
  img: StaticImageData
}
type Props = {
  title: string
  reviews: Review[]
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ReviewsOne(props: Props) {
  const { reviews, title } = props
  return (
    <div>
      <div className="bg-white mx-10">
        <div className="my-10">
          <h2 className="text-center font-bold text-3xl">{title}</h2>
          <AnimatePresence>
            {reviews.map((review, reviewIdx) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                key={review.id}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 }
                }}
              >
                <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
                  <div className="flex-none py-10">
                    <Image src={review.img} alt="avatar" className="h-10 w-10 rounded-full bg-gray-100" />
                  </div>
                  <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                    <h3 className="font-medium text-gray-900">{review.author}</h3>
                    <p>
                      <time dateTime={review.datetime}>{review.date}</time>
                    </p>

                    <div className="mt-4 flex items-center">
                      {[0, 1, 2, 3, 4].map(rating => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{review.rating} out of 5 stars</p>
                    <div
                      className="prose prose-sm mt-4 max-w-none text-gray-500"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
