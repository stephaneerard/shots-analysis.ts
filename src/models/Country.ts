console.log('loading %s', __filename)

import {Column, Entity, Generated, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CompanyWorkingInCountryWithinPeriod} from "./CompanyWorkingInCountryWithinPeriod";

@Entity('Country')
export class Country {

    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    @Index({ unique: true })
    public id: string

    @Column()
    @Index({ unique: true })
    public name: string

    @OneToMany(type => CompanyWorkingInCountryWithinPeriod, inverse => inverse.Company)
    public CompaniesWorkingDuringPeriod: Array<CompanyWorkingInCountryWithinPeriod>
}
