console.log('loading %s', __filename)

import {EntityRepository, getManager, Repository} from "typeorm";
import * as Model from "./../models"


@EntityRepository(Model.Company)
export class CompanyRepository extends Repository<Model.Company> {

    public async doSomething() {

        const m = getManager()

        const company = m.create(Model.Company, {name: 'Dietsmann'});
        const country = m.create(Model.Country, {name: 'France'});

        const saved = await m.save([company, country]);

        const companyWorkedInCountryDuringPeriod_1: Model.CompanyWorkingInCountryWithinPeriod = m.create('CompanyWorkingInCountryWithinPeriod');

        companyWorkedInCountryDuringPeriod_1.Country = country;
        companyWorkedInCountryDuringPeriod_1.Company = company;
        companyWorkedInCountryDuringPeriod_1.from = new Date()
        companyWorkedInCountryDuringPeriod_1.to = new Date()

        company.WorksInCountriesWithinPeriod = [companyWorkedInCountryDuringPeriod_1];
        country.CompaniesWorkingDuringPeriod = [companyWorkedInCountryDuringPeriod_1];

        const saved_1 = await m.save(companyWorkedInCountryDuringPeriod_1);

        return {saved, saved_1};

    }
}
