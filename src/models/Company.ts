import {Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CompanyWorkingInCountryWithinPeriod} from "./CompanyWorkingInCountryWithinPeriod";

console.log('loading %s', __filename)

@Entity('Company')
export class Company {

    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    public id: string

    @Column()
    public name: string

    @OneToMany(type => CompanyWorkingInCountryWithinPeriod, country => country.Company)
    public WorksInCountriesWithinPeriod: Array<CompanyWorkingInCountryWithinPeriod>

}
