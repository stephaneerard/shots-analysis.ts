console.log('loading %s', __filename)

import {Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CompanyWorkingInCountryWithinPeriod} from "./CompanyWorkingInCountryWithinPeriod";

@Entity('Country')
export class Country {

    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    public id: string

    @Column()
    public name: string

    @OneToMany(type => CompanyWorkingInCountryWithinPeriod, inverse => inverse.Company)
    public CompaniesWorkingDuringPeriod: Array<CompanyWorkingInCountryWithinPeriod>
}
