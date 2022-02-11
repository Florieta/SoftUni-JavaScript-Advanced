function monkeyPatcher(command) {

    if (command === 'upvote') return this.upvotes++;
    if (command === 'downvote') return this.downvotes++;

    let upvote = this.upvotes;
    let downvote = this.downvotes;
    let totalVotes = upvote + downvote;
    let balance = upvote - downvote;

    function ratingState() {
        if (totalVotes < 10) return 'new';
        if (upvote > totalVotes * 0.66) return 'hot';
        if (balance >= 0 && totalVotes > 100) return 'controversial';
        if (balance < 0) return 'unpopular';
        return 'new';
    }

    if (totalVotes > 50) {
        let inflateVote = Math.ceil(Math.max(upvote, downvote) * 0.25);
        return [upvote + inflateVote, downvote + inflateVote, balance, ratingState()];
    } else {
        return [upvote, downvote, balance, ratingState()];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score');
console.log(score);