const POLLING_TIME = 1000;
const TOPIC_NAME = "ethcon.ticket.request"

async function main() {

    while (true) {
        const ticket_requests = await get_ticket_requests_from_mq(TOPIC_NAME);
        const signed_transactions = make_signed_transactions(ticket_requests);
        for (const item of signed_transactions) {
            send_transaction(item);
            send_email(item);
        }
        sleep(POLLING_TIME)
    }
}

async function get_ticket_requests_from_mq(topic_name) {
    const res = get_topic(topic_name)
    return res

    function get_topic(topic_name) {
    }
}

function make_signed_transactions(ticket_requests) {
    const private_key = process.env.PRIVATE_KEY;
    return ticket_requests.map(
        sign_transaction
    )

    function sign_transaction(item) {
        
    }
}

function send_transaction(item) {
}

function send_email(item) {
}

