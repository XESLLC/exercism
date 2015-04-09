class Squares
  def initialize (n)
    @n = n
  end

  def square_of_sums
    sum=0
    (0..@n).to_a.map {|n| sum += n}.last ** 2
  end

  def sum_of_squares
    sum = 0
    (0..@n).to_a.map {|n| sum += n**2}.last
  end

  def difference
    square_of_sums - sum_of_squares
  end
end
