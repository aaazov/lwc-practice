import { api, LightningElement, wire } from 'lwc';
<<<<<<< HEAD
import  getRecordsWithIds  from '@salesforce/apex/GetSelectedRecords.getRecordsWithIds';
=======
>>>>>>> 2be90c1 (use lightning-record-form to query records)

export default class GetRecords extends LightningElement {
    @api selectedRecordIds;

<<<<<<< HEAD
    @wire (getRecordsWithIds, { selectedRecordIds: '$selectedRecordIds' })
    records;
=======
>>>>>>> 2be90c1 (use lightning-record-form to query records)
}
   
