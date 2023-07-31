import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation'

const numWords = parseInt(process.argv[2])

const randomSlug = generateSlug(numWords, {
    format: 'title'
})

chalkAnimation.rainbow(randomSlug)

