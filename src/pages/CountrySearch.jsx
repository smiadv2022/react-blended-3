import { Container, SearchForm, Section, Heading, Loader, CountryList } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    fetchByRegion(query).then(setCountries);
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
    setCountries([]);
  };
  return (
    <Section>
      <Container>
        <SearchForm qwqwqw={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
