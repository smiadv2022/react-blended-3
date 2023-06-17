import { Section, Container, CountryInfo } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryDetail, setCountryDetail] = useState(null);
  const { countryId } = useParams();
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';
  useEffect(() => {
    fetchCountry(countryId).then(data => setCountryDetail(data));
  }, [countryId]);
  if (!countryDetail) return;
  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>
        <CountryInfo {...countryDetail} />
      </Container>
    </Section>
  );
};
