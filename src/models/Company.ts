import {Column, Entity, Generated, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CompanyWorkingInCountryWithinPeriod} from "./CompanyWorkingInCountryWithinPeriod";

console.log('loading %s', __filename)

@Entity('Company')
export class Company {

    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    @Index({ unique: true })
    public id: string

    @Column()
    @Index({ unique: true })
    public name: string

    @OneToMany(type => CompanyWorkingInCountryWithinPeriod, country => country.Company)
    public WorksInCountriesWithinPeriod: Array<CompanyWorkingInCountryWithinPeriod>

}
