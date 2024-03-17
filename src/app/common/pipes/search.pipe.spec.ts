import { SearchPipe } from './search.pipe';
import { Jedis } from '../interfaces/jedis';


describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('search values in input object array by text/name', () => {
    const pipe = new SearchPipe();
    const jediOrder: Jedis[] = [
      { name: "Obi-wan Kenobi", rank: "master" },
      { name: "Yoda", rank: "master" },
      { name: "Anakin Skywalker", rank: "padawan" },
      { name: "Mace Windu", rank: "master" },
      { name: "Adi Galia", rank: "master" }
    ]
    const result = pipe.transform(jediOrder, "obi");
    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual("Obi-wan Kenobi");
  })
});
