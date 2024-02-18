function RandomIndex(StartRange: number, EndRange: number) {
    return Math.floor(Math.random() * EndRange) + StartRange;
}

export default RandomIndex;