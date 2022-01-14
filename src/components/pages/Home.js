/* eslint-disable */
const Home = () => {
  const aboutData = [
    {
      title: 'Welcome to our Page',
      definition:
      'Mathematics, the science of structure, order, and relation that has evolved from elemental practices of counting, measuring, and describing the shapes of objects. It deals with logical reasoning and quantitative calculation, and its development has involved an increasing degree of idealization and abstraction of its subject matter. Since the 17th century, mathematics has been an indispensable adjunct to the physical sciences and technology, and in more recent times it has assumed a similar role in the quantitative aspects of the life sciences.',
      description:
      '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations and Read a random math-related quote.',
    },
  ];


  return (
    <div className="mainContent">
      <h2>{aboutData[0].title}</h2>
      <p>{aboutData[0].definition}</p>
      <p>{aboutData[0].description}</p>
    </div>
);
  };

export default Home;
