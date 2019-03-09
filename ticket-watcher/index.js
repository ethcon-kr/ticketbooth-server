const SLEEP_TIME = 1000;
const TOPIC_NAME = "ethcon.ticket.request"
let last_cralwed = 0;

async function main() {

    while (true) {
        const res = polling_db_information();
        const filtered_res = check_valid(res);

        await request_ticket_generate(filtered_res);
        sleep(SLEEP_TIME)
    }
}

async function polling_db_information() {
    const QUERY = "get all ticket information from lastCrawled + 1 to latest";
    const conn = get_db();
    const res = await conn(QUERY)
    last_crawled = get_last_number(res)
    return res;
    function get_db(){

    }
    function get_last_number(res) {

    }
}

function check_valid(result) {
    return result;
}

function request_ticket_generate(filtered_result) {
    for ( const item of filtered_result) {
        push_to_mq(item,TOPIC_NAME)
    }
    function oush_to_mq(item, TOPIC_NAME) {

    }
}

main();

