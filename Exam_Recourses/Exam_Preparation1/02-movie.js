class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }
    newScreening(date, hall, description) {
        for (let screening of this.screenings) {
            if (screening['date'] == date && screening['hall'] == hall) {
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
            }
        }
        this.screenings.push({
            date,
            hall,
            description
        });
        return `New screening of ${this.movieName} is added.`;
    }
    endScreening(date, hall, soldTickets) {
        for (let screening of this.screenings) {
            if (screening['date'] == date && screening['hall'] == hall) {
                this.totalProfit += soldTickets * this.ticketPrice;
                this.totalSoldTickets += soldTickets;
                const idx = this.screenings.indexOf(screening);
                this.screenings.splice(idx, 1);
                return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${soldTickets * this.ticketPrice}`;
            }
        }
        throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
    }
    toString() {
        let result = `${this.movieName} full information:\n`;
        result += `Total profit: ${this.totalProfit.toFixed(0)}$\n`;
        result += `Sold Tickets: ${this.totalSoldTickets}\n`;
        if (this.screenings.length > 0) {
            result += 'Remaining film screenings:\n';
            this.screenings.sort((a, b) => a['hall'].localeCompare(b['hall']));
            for (let screening of this.screenings) {
                result += `${screening['hall']} - ${screening['date']} - ${screening['description']}\n`;
            }
        } else {
            result += 'No more screenings!';
        }
        return result.trim();
    }
}