import {EntityRepository, Repository} from "typeorm";
import {Company, CompanyWorkingInCountryWithinPeriod, Country} from "../models";

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {

    public async newCompanyWorkingInCountryWithinPeriod(company: Company, country: Country, from: Date) {
        const c = new CompanyWorkingInCountryWithinPeriod();

        c.Company = company;
        c.Country = country;
        c.from = from;

        return c;
    }

}
