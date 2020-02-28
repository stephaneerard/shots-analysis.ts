console.log('loading %s', __filename)

import {Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Country} from "./Country";
import {Company} from "./Company";

@Entity('CompanyWorkingInCountryWithinPeriod')
export class CompanyWorkingInCountryWithinPeriod {

    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    public id: string

    @ManyToOne(type => Company, company => company.WorksInCountriesWithinPeriod)
    public Company: Company

    @ManyToOne(type => Country, inverse => inverse.CompaniesWorkingDuringPeriod)
    public Country: Country

    @Column({
        type: "date"
    })
    public from: Date

    @Column({
        type: "date"
    })
    public to?: Date | null
}
