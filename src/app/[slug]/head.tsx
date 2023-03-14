export default function Head({params}) {
  const url = `https://www.andrea-gauvreau.fr/${params.slug}`
  const content = `Parcourrez le projet ${params.slug} développé en React, NextJS et ThreeJS.`
  return (
    <>
      <title>Projets Andréa Gauvreau - Developpeur Front End</title>
      <meta name="description" content={content} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="canonical" href={url} />
    </>
  )
}
