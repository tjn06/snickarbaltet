export const getStaticPaths = async () => {

  const res = await fetch('http://localhost:5000/test')
  const data = await res.json();
  console.log(data)

  const paths = data.movies.map(fakeitem => {
    return {
      params: { id: fakeitem.id.toString() }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log(id)
  const res = await fetch('http://localhost:5000/test/' + id);
  const data = await res.json();
  

  return {
    props: { fakeitem: data }
  }
}

const Details = ({ fakeitem }) => {
  return ( 
    <div>
      <h1>{ fakeitem.title }</h1>
      <p>Release year: { fakeitem.releaseYear }</p>
    </div>
  );
}

export default Details;