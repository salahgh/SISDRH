select id, CREATED_DATE, DATE_REFERENCE, REFERENCE, NUMBER_OF_PAPERS, OCR_DONE , EXECUTED_AT , TERMINATED_AT
from OCR_RESULT
order by DATE_REFERENCE ;

select users.* , enqdeq from users@GRHDSN21 users ;

select * from EST_NOTE_OFF ;