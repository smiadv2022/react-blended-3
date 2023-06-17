import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries()
      .then(data => setCountries(data))
      .catch(error => console.log(error.message));
  }, []);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
